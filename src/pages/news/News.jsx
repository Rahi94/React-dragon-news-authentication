import { useParams } from "react-router-dom";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";

const News = () => {
    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3 border">
                    <h3 className="text-3xl">News details</h3>
                    <p>{id}</p>
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default News;