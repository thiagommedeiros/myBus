import React from 'react'
import AutoComplete from 'material-ui/AutoComplete'

const SearchBox = (props) => (
  <AutoComplete
    hintText={props.hintText}
    searchText={props.searchText}
    maxSearchResults={props.maxSearchResults}
    onUpdateInput={props.onUpdateInput}
    dataSource={props.dataSource}
    dataSourceConfig={props.dataSourceConfig}
    filter={props.filter}
    fullWidth={props.fullWidth}
    onNewRequest={props.onNewRequest}
  />
)

export default SearchBox