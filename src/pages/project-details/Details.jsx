import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    const { id } = useParams()
    const [project, setProject] = useState([])

    useEffect(() => {
        fetch('/projects.json')
            .then((res) => res.json())
            .then((data) => {
                const currentProject = data.find((item) => item.id === id)
                setProject(currentProject)
            })
            .catch((err) => {
                console.error(err)
            });
    }, []);

    console.log(project)

    return (
        <>


        </>
    )
}

export default Details