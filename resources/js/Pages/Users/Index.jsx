import App from '../../Layouts/App';
import React, { useState } from 'react';
import Pagination from '../../Components/Pagination';
import Dialog from '../../Components/Dialog';
import CreateUser from '../../Components/CreateUser';
import useDialog from '../../Hooks/useDialog';
import EditUser from '../../Components/EditUser';

export default function Index(props) {
   const { data: users, links, from } = props.users;
   const [state, setState] = useState([]);
   const [addDialogHandler, addCloseTrigger, addTrigger] = useDialog();
   const [editDialogHandler, editCloseTrigger, editTrigger] = useDialog();
   const openEditDialog = (user) => {
      setState(user);
      editDialogHandler();
   };

   return (
      <>
         <div className="container">
            <Dialog trigger={addTrigger} title="Create New Users">
               <CreateUser close={addCloseTrigger} />
            </Dialog>

            <Dialog trigger={editTrigger} title={`Edit User: ${state.name}`}>
               <EditUser model={state} close={editCloseTrigger} />
            </Dialog>

            <button onClick={addDialogHandler} className="btn btn-primary">
               Add
            </button>

            <div className="card mt-3">
               <div className="card-header">Users</div>
               <div className="card-body">
                  <table className="table">
                     <thead>
                        <tr>
                           <th>#</th>
                           <th>Name</th>
                           <th>Username</th>
                           <th>Email</th>
                           <th>Location</th>
                           <th className="text-end">Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        {users.map((user, index) => (
                           <tr key={user.id}>
                              <td>{from + index}</td>
                              <td>{user.name}</td>
                              <td>{user.username}</td>
                              <td>{user.email}</td>
                              <td>{user.location}</td>
                              <td>
                                 <div className="dropdown text-end">
                                    <button className="btn p-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                       {/* icon dots */}
                                       <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                       </svg>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                       <li>
                                          <a className="dropdown-item" href="#">
                                             View
                                          </a>
                                       </li>
                                       <li>
                                          <button className="dropdown-item" onClick={() => openEditDialog(user)}>
                                             Edit
                                          </button>
                                       </li>
                                       <li>
                                          <a className="dropdown-item text-danger" href="#">
                                             Delete
                                          </a>
                                       </li>
                                    </ul>
                                 </div>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>

                  {/* pagination */}
                  <Pagination links={links} />
               </div>
            </div>
         </div>
      </>
   );
}

Index.layout = (page) => <App children={page} title="Users" />;
