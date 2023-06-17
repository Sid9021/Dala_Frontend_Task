import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// const breadData = [
//   {
//     id: '1',
//     active: false,
//     link: "/dashboard",
//     name: 'Dashboard'
//   }
// ];

// const DemoBreadcrumb = () => {
//   return (
//     <CustomBreadcrumb data={breadData} />
//   );
// }

const CustomBreadcrumb = ({ data = [] }) => {
  return (
    <div className='page-header'>
      <Breadcrumb>
        {data.map((item, index) => (
          <Breadcrumb.Item key={item.id} active={item.active}>
            <Link to={item.link}>
              {item.name}
            </Link>
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </div>
  )
}

export default CustomBreadcrumb