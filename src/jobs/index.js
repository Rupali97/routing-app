import React from 'react'
import InfoSection from '../components/InfoSection'
import SelectionBar from '../components/SelectionBar'
import Divider from '@material-ui/core/Divider';

function Index(props) {
  const [jobField, setJobField] = React.useState('');
  const getJobField = (filed) => {
    setJobField(filed)
  }
  return (
    <div className="paddingTop">
      <SelectionBar getJobField={getJobField} />
      <Divider />
      <InfoSection jobField={jobField} />
    </div>
  )
}

export default Index
