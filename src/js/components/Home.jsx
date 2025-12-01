import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SecondCounter from "./Secondcounter";

//create your first component
const Home = ({seconds}) => {
	return (
		<div className="bg-black min-vh-100 d-flex justify-content-center align-items-start pt-5">
			<SecondCounter seconds={seconds}/>
		</div>
	);
};

export default Home;