import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PortfolioDetail from "../../components/section/portfolio/detail"
import { dataProject, project } from "../../components/section/portfolio/projects/types"

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
      <PortfolioDetail data={dataDetailPortfolio} />
    </>
  )
}

export default PageDetailPortfolio
