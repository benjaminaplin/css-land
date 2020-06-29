import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import treeData from '../global/treeData'

const renderTreeData = ({root}) => {
  for (const key in root) {
    if (root.hasOwnProperty(key)) {
      const element = root[key];
      // if null, return nothing
      console.log('key', key, ', element',element);
      // if no children, return val only
      // otherwise return val, children
      if(element === null){
        return
      }
      return (
        <div className="treehouse-item-container">
          <>
          {[] > 0 && (
            <>
              <div className="arrow-up" onClick={() => console.log('up!')} />
              <div className="arrow-down" onClick={() => console.log('down!')} />
            </>
          )}
            {element.val}
          </>
        </div>
      )
  }
}}

const TreeHouse = () => {
  return (
    <div className="treehouse-container">
        {renderTreeData(treeData)}
    </div>
  )
}

export default TreeHouse