export const woMenuItems = [
  {
    menutitle: 'DASHBOARD',
    Items: [
      {
        path: `${process.env.PUBLIC_URL}/dashboard`,
        icon: 'ti-home',
        type: 'link',
        active: false,
        selected: false,
        title: 'Dashboard'
      },
    ]
  },
]

export const MENUITEMS = [
  {
    menutitle: 'DASHBOARD',
    Items: [
      {
        path: `${process.env.PUBLIC_URL}/dashboard`,
        icon: 'ti-home',
        type: 'link',
        active: false,
        selected: false,
        title: 'Dashboard'
      },
    ]
  },
  {
    menutitle: 'Master Forms',
    Items: [
      {
        path: `${process.env.PUBLIC_URL}/master-forms`,
        icon: 'ti-home',
        type: 'sub',
        active: false,
        selected: false,
        title: 'General Master Forms',
        children: [
          {
            path: `${process.env.PUBLIC_URL}/master-forms/country`,
            type: 'link',
            active: false,
            selected: false,
            title: 'Country'
          },
          {
            path: `${process.env.PUBLIC_URL}/master-forms/state`,
            type: 'link',
            active: false,
            selected: false,
            title: 'State'
          },
          {
            path: `${process.env.PUBLIC_URL}/master-forms/city`,
            type: 'link',
            active: false,
            selected: false,
            title: 'City'
          },{
            path: `${process.env.PUBLIC_URL}/master-forms/material`,
            type: 'link',
            active: false,
            selected: false,
            title: 'Material Type'
          },
        ]
      },
      {
        path: `${process.env.PUBLIC_URL}/master-forms`,
        icon: 'ti-home',
        type: 'sub',
        active: false,
        selected: false,
        title: 'DALA\'s Master Forms',
        children: [
          {
            path: `${process.env.PUBLIC_URL}/master-forms/department`,
            type: 'link',
            active: false,
            selected: false,
            title: 'Department'
          },

          {
            path: `${process.env.PUBLIC_URL}/master-forms/designation`,
            type: 'link',
            active: false,
            selected: false,
            title: 'Designation'
          },

          {
            path: `${process.env.PUBLIC_URL}/master-forms/user`,
            type: 'link',
            active: false,
            selected: false,
            title: 'User'
          },
        ]
      }
    ]
  },
  {
    menutitle: 'MATERIAL MOVEMENT',
    Items: [
      {
        path: `${process.env.PUBLIC_URL}/material-movement`,
        icon: 'ti-home',
        type: 'sub',
        active: false,
        selected: false,
        title: 'Material Movement',
        children: [
          {
          path: `${process.env.PUBLIC_URL}/material-movement/new`,
          type: 'link',
          active: false,
          selected: false,
          title: 'New Request'
        },
      ]
  },
]
},
  {
    menutitle: 'VENDORS',
    Items: [
      {
        path: `${process.env.PUBLIC_URL}/cpgc`,
        icon: 'ti-user',
        type: 'sub',
        active: false,
        selected: false,
        title: 'CPGCs',
        children: [
          {
            path: `${process.env.PUBLIC_URL}/cpgc/requests`,
            type: 'link',
            active: false,
            selected: false,
            title: 'CPGC Requests'
          },
          {
            path: `${process.env.PUBLIC_URL}/cpgc/manage`,
            type: 'link',
            active: false,
            selected: false,
            title: 'Manage CPGCs'
          },
          {
            path: `${process.env.PUBLIC_URL}/cpgc/add`,
            type: 'link',
            active: false,
            selected: false,
            title: 'Add New CPGC'
          },
        ]
      },
      {
        path: `${process.env.PUBLIC_URL}/logistics`,
        icon: 'ti-truck',
        type: 'sub',
        active: false,
        selected: false,
        title: 'Logistic Partners',
        children: [
          {
            path: `${process.env.PUBLIC_URL}/logistics/request`,
            type: 'link',
            active: false,
            selected: false,
            title: 'LP Requests'
          },
          {
            path: `${process.env.PUBLIC_URL}/logistics/manage`,
            type: 'link',
            active: false,
            selected: false,
            title: 'Manage LPs'
          },
          {
            path: `${process.env.PUBLIC_URL}/logistics/add`,
            type: 'link',
            active: false,
            selected: false,
            title: 'Add New LP'
          },
        ]
      },
      {
        path: `${process.env.PUBLIC_URL}/warehouse`,
        icon: 'ti-package',
        type: 'sub',
        active: false,
        selected: false,
        title: 'Warehouse Operators',
        children: [
          {
            path: `${process.env.PUBLIC_URL}/warehouse/request`,
            type: 'link',
            active: false,
            selected: false,
            title: 'WO Requests'
          },
          {
            path: `${process.env.PUBLIC_URL}/warehouse/manage`,
            type: 'link',
            active: false,
            selected: false,
            title: 'Manage WOs'
          },
          {
            path: `${process.env.PUBLIC_URL}/warehouse/add`,
            type: 'link',
            active: false,
            selected: false,
            title: 'Add New WO'
          },
        ]
      },
    ]
  },
  {
    menutitle: 'SETTINGS',
    Items: [
      // {
      //   path: `${process.env.PUBLIC_URL}/settings/users`,
      //   icon: 'ti-user',
      //   type: 'sub',
      //   active: false,
      //   selected: false,
      //   title: 'Manage Users',
      //   children: [
      //     {
      //       path: `${process.env.PUBLIC_URL}/settings/users/add-user`,
      //       type: 'link',
      //       active: false,
      //       selected: false,
      //       title: 'Add Admin User'
      //     },
      //     {
      //       path: `${process.env.PUBLIC_URL}/settings/users/permissions`,
      //       type: 'link',
      //       active: false,
      //       selected: false,
      //       title: 'Manage Permissions'
      //     }
      //   ]
      // },
      {
        path: `${process.env.PUBLIC_URL}/settings/profile`,
        icon: 'ti-user',
        type: 'sub',
        active: false,
        selected: false,
        title: 'Profile',
        children: [
          {
            path: `${process.env.PUBLIC_URL}/settings/profile/edit-profile`,
            type: 'link',
            active: false,
            selected: false,
            title: 'Edit Profile'
          },
          {
            path: `${process.env.PUBLIC_URL}/settings/profile/change-password`,
            type: 'link',
            active: false,
            selected: false,
            title: 'Change Password'
          }
        ]
      },
    ]
  },
];

// export const MASTERFORMMENU = [
//   {
//     menutitle: 'Master Forms',
//     Items: [
//       {
//         path: `${process.env.PUBLIC_URL}/admin/master-forms`,
//         icon: 'ti-home',
//         type: 'sub',
//         active: false,
//         selected: false,
//         title: 'Master Forms',
//         children: [
//           {
//             path: `${process.env.PUBLIC_URL}/master-forms/country`,
//             type: 'link',
//             active: false,
//             selected: false,
//             title: 'Country'
//           },
//           {
//             path: `${process.env.PUBLIC_URL}/admin/master-forms/currency`,
//             type: 'link',
//             active: false,
//             selected: false,
//             title: 'Currency'
//           },
//           {
//             path: `${process.env.PUBLIC_URL}/admin/master-forms/user`,
//             type: 'link',
//             active: false,
//             selected: false,
//             title: 'User'
//           },
//         ]
//       },
//     ]
//   },
// ]
