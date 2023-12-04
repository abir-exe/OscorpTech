/* eslint-disable react/jsx-no-comment-textnodes */

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";



const MyEmployeeList = () => {


  

  const axiosSecure = useAxiosSecure();
  
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users", {
        headers: {
          authorization: `Bearer ${localStorage.getItem('access-token')}`
        }
      });
      return res.data;
    },
  });

  return (
    <div className="space-y-3 my-5">
        <Helmet>
        <title>Oscorp Tech | My Employee List</title>
        
      </Helmet>
      <section className="space-y-3">
        <h2 className="text-3xl text-center mb-10 border-x-2 py-5 font-bold uppercase">
          // My Employee List
        </h2>
      <h2>Total Employee: {users.length}</h2>
       
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                
                <th>Member Type</th>
                <th>Remove From Team</th>
                
              </tr>
            </thead>
            <tbody>
              {
                users.map((user, index) => <tr key={user._id}>
                  <th>
                    {index + 1}
                  </th>
                  <th>
                  <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={user.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                  </th>
                  <td>
                    
                      
                      
                        <div className="font-bold">{user.name}</div>
                        
                      
                    
                  </td>
                  <td>
                    {
                        user?.role ? <>{user.role}</> : <>N/A</>
                    }
                  </td>
                  <td>
                    <button className="btn btn-sm btn-outline">Remove</button>
                  </td>
                  
                </tr>)
              }
              
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}; 

export default MyEmployeeList;
