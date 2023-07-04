import Addnotes from "./Addnotes";


const Dashboard = (props) => {
  const {showAlert}=props;
  return (
    <div>
      <Addnotes showAlert={showAlert}
       />
    </div>
  );
};

export default Dashboard;