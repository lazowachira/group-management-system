import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const GroupListing = () => {
    const [groupdata, groupdatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/group/detail/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/group/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:5000/group/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }


    useEffect(() => {
        fetch('http://localhost:5000/group').then((res) => {
            return res.json();
        }).then((resp) => {
            groupdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        }
        )
    }, [])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Group Listing</h2>
                </div>
                <div className="card body">
                    <div className="divbtn">
                        <Link to="group/create" className="btn btn-success">Add New (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Group</td>
                                <td>members</td>
                                <td>Savings</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {groupdata &&
                                groupdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.members}</td>
                                        <td>{item.savings}</td>
                                        <td>
                                            <a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a>
                                            <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a>
                                            <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Details</a>
                                        </td>
                                    </tr>
                                )
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}

export default GroupListing;