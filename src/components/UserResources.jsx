import React, { useEffect, useState } from 'react'

const UserResources = ({ resourceKey, url, title }) => {
  const [userResourcesError, setUserResourcesError] = useState('');
  const [userResources, setUserResources] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchOrgData = async ({ url }) => {
      setUserResourcesError('')
      setIsLoading(true);
      try {
        const res = await fetch(url)
        if (res.status === 404) {
          setUserResourcesError('no user with that name found :(')
        }
        if (res.status === 403) {
          setUserResourcesError('no access for you are forbiden:(')
        }
        const jsonRes = await res.json()
        console.log('response', jsonRes)
        setUserResources(jsonRes)
      } catch (error) {
        console.log('error', error)
        setUserResourcesError('problum fetchzin')
      } finally {
        setIsLoading(false);
      }
    }
    if (url) {
      fetchOrgData({ url })
    }
  }, [url])

  return <div><h1>{title}:</h1>
    <ul>
      {userResources.length > 0
        ? userResources.map((org, i) => (
          <li key={i}
          >{org[resourceKey]}</li>))
        : <div>no orgs :(</div>
      }
    </ul>
  </div>
}

export default UserResources