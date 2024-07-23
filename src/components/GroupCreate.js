import { Link, useNavigate, } from "react-router-dom";
import { useState } from "react";

const GroupCreate = () => {

    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [members, memberschange] = useState("");
    const [savings, savingschange] = useState("");
    const [validation, valchange] = useState("");

    const Navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const groupdata = { name, members, savings, validation };

        fetch("http://localhost:5000/group", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(groupdata)
        }).then((res) => {
            alert('Saved successfully.')
            Navigate('');

        }).catch((err) => {
            console.log(err.message)
        })
    }
    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2>Group Create</h2>

                            </div>
                            <div className="card-body">

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input required value={name} onMouseDown={e => valchange(true)} onChange={e => namechange(e.target.value)} className="form-control"></input>{name.length == 0 && validation && <span className="text-danger">Enter the Name</span>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Members</label>
                                            <input value={members} onChange={e => memberschange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Savings</label>
                                            <input required value={savings} onChange={e => savingschange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default GroupCreate;