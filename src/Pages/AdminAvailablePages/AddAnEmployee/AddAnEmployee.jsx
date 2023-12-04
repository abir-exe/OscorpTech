import { Helmet } from "react-helmet-async";
import Packages from "../../Home/Packages/Packages";


const AddAnEmployee = () => {
    return (
        <div>
            <Helmet>
        <title>Oscorp Tech | Add An Employee</title>
        
      </Helmet>
           <Packages></Packages>
        </div>
    );
};

export default AddAnEmployee;