import React, { useEffect, useState } from 'react'
import UserResources from './UserResources'

const GitHubUserFinder = () => {
  const [userInfo, setUserInfo] = useState('');
  const [query, setQuery] = useState('benjaminaplin');
  const [url, setUrl] = useState(`https://api.github.com/users/benjaminaplin`);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setError('')
      setIsLoading(true);
      try {
        const res = await fetch(url)
        if (res.status === 404) {
          setError('no user with that name found :(')
        }
        if (res.status === 403) {
          setError('no access for you are forbiden:(')
        }
        const jsonRes = await res.json()
        setUserInfo(jsonRes)
      } catch (error) {
        console.log('error', error)
        setError('problum fetchzin')
      } finally {
        setIsLoading(false);
      }
    }
    fetchData()
  }, [url])

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <button type="button" onClick={() => setUrl(`https://api.github.com/users/${query}`)}>
        Search
      </button>
      {error !== '' && <div>{error}</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
          error === '' && <>
            <h1>{userInfo.name}</h1>
            <div>
              <img alt='yay avator' src={userInfo.avatar_url} width='135' height='130' />
            </div>
            <h3>blog: <a target='blank' href={userInfo.blog}>{userInfo.blog}</a></h3>
            <h3>login: {userInfo.login}</h3>
            <h3>location: {userInfo.location}</h3>
            <h3>company: {userInfo.company}</h3>
            <h3>followers: {userInfo.followers}</h3>
            <h3>gihub url: <a target='blank' href={userInfo.url}>{userInfo.url}</a></h3>
            <h3>organizations url: <a target='blank' href={userInfo.organizations_url}>{userInfo.organizations_url}</a></h3>
            <h3>repos url: <a target='blank' href={userInfo.repos_url}>{userInfo.repos_url}</a></h3>
          </>
        )
      }
      {userInfo.organizations_url && <UserResources url={userInfo.organizations_url} resourceKey={'login'} title={'Organizations'} />}
      {userInfo.repos_url && <UserResources url={userInfo.repos_url} resourceKey={'name'} title={'Repos'} />}
    </>
  )
};

export default GitHubUserFinder