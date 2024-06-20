import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import Skeleton from '@mui/material/Skeleton';
import '../../Styles/Admin/Skeleton.css'

function ReportSkeleton() {
return(
<Card className='skeleton'>
<br></br>
<Skeleton animation="wave" height={40} width="20%" className='center'/>
<br></br>
<Skeleton animation="wave" height={40} width="30%" />
<Skeleton animation="wave" height={60}/>
<Skeleton animation="wave" height={60}/>
<Skeleton animation="wave" height={60}/>
<Skeleton animation="wave" height={60}/>
<Skeleton animation="wave" height={60}/>
<Skeleton animation="wave" height={60} />
 </Card>
  );
}
export default ReportSkeleton;