import { Scene, Router, Actions } from 'react-native-router-flux'
import loginForm from './components/loginForm.js'
import React from 'react';
import EmployeeList from './components/employeeList.js'
import EmployeeCreate from './components/employeeCreate.js'
import EmployeeEdit from './components/employeeEdit.js'

const RouterComponent = ({}) => (
  <Router>
    <Scene key="root" hideNavBar>
      <Scene key="auth">
        <Scene key="login"
          component={loginForm}
          title="Please Login"
          initial />
      </Scene>
      <Scene key="main">
        <Scene
          rightTitle="Add"
          onRight={()=>{Actions.employeeCreate()}}
          key="employeeList"
          component={EmployeeList}
          title="Employees"
          initial
         />
         <Scene
          key="employeeCreate"
          component={EmployeeCreate}
          title="Create New Employee"
         />
         <Scene
          key="employeeEdit"
          component={EmployeeEdit}
          title="Edit Employee"
         />
      </Scene>
    </Scene>
  </Router>
);

export default RouterComponent;
