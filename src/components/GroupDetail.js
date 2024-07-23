import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const GroupDetail = () => {
    const { groupid } = useParams();

    const [groupdata, groupdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:5000/group/" + groupid).then((res) => {
            return res.json();
        }).then((resp) => {
            groupdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>
            <div>
                <div className="container">

                    <div className="card row" style={{ "textAlign": "left" }}>
                        <div className="card-title">
                            <h2>Group Members</h2>
                        </div>
                        <div className="card-body"></div>

                        {groupdata &&
                            <div>
                                <h2>The Group name is: <b>{groupdata.name}</b>  ({groupdata.id})</h2>
                                <h3>Group Details</h3>
                                <h5>members: {groupdata.members}</h5>
                                <h5>The savings is : {groupdata.savings}</h5>
                                <Link className="btn btn-danger" to="/">Back to Listing</Link>
                            </div>
                        }
                    </div>
                </div>
            </div >
        </div>
    );
}

export default GroupDetail;

