import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Details = () => {
    const { detailsId } = useParams();
    const [detail, setDetail] = useState({})
    useEffect(() => {
        fetch(`/fakeData.JSON`)
            .then(res => res.json())
            .then(data => {
                setDetail(data.find(p => p.id == detailsId))
            })
    }, [detailsId])
    console.log(detail)
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <h1 className="text-secondary">{detail.name}</h1>
                    <p>{detail.description}</p>
                </div>
                <div className="col-lg-6 col-md-12">
                    <img className="img-fluid w-100" src={detail.image} alt="" />
                </div>
            </div>
            <Link to="/"> <button className="btn btn-secondary my-5">Go Back</button> </Link>
        </div>
    );
};

export default Details;