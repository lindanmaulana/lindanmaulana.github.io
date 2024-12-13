import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { dataProject, project } from "../../components/section/portfolio/projects/types"
import DetailPortfolio from "../../components/section/portfolio/detail"

const PageDetailPortfolio = () => {
    const {name} = useParams()
    const [dataDetailPortfolio, setDataDetailPortfolio] = useState<(project | undefined)>(undefined)

    useEffect(() => {
        const fetchData = () => {
            const project =  dataProject?.find((data) => data.title === name)

            setDataDetailPortfolio(project)
        }

        fetchData()
    }, [name])

    if(!dataDetailPortfolio) return <h2>Loading...</h2>

    console.log({dataDetailPortfolio})
  return (
    <>
      <DetailPortfolio data={dataDetailPortfolio} />
    </>
  )
}

export default PageDetailPortfolio
