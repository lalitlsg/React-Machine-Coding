export const generateFormData = [
  {
    id: 'i1',
    element: 'input',
    types: [
      { id: 'it1', value: 'text', label: 'Enter Name', name: 'name' },
      { id: 'it2', value: 'number', label: 'Enter Age', name: 'age' },
      {
        id: 'it3',
        value: 'checkboxGroup',
        label: 'Roles',
        name: 'roles',
        options: [
          { id: 'itc1', value: 'checkbox', label: 'Frontend', name: 'frontend' },
          { id: 'itc2', value: 'checkbox', label: 'Backend', name: 'backend' },
          { id: 'itc3', value: 'checkbox', label: 'DevOps', name: 'devops' },
        ],
      },
      {
        id: 'it4',
        value: 'radioGroup',
        label: 'Gender',
        name: 'gender',
        options: [
          { id: 'itr1', value: 'radio', label: 'Male', name: 'Male' },
          { id: 'itr2', value: 'radio', label: 'Female', name: 'Female' },
          { id: 'itr3', value: 'radio', label: 'Other', name: 'Other' },
        ],
      },
      { id: 'it5', value: 'password', label: 'Enter Password', name: 'password' },
    ],
  },
];
