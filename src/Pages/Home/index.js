import useDocumentTitle from "../../Hooks/useDocumentTitle"
import { useAuth } from "../../Contexts/auth"
import HomeENG from "../HomeENG"
import HomeVI from "../HomeVI"

function Home({ instance }) {
	const { language } = useAuth()

	useDocumentTitle(language !== "eng" ? "Trang chủ - AnimeSub" : "HOME - AnimeSub")

	return (
		<>{language !== "eng" ? <HomeVI instance={instance} /> : <HomeENG />}</>
	)
}

export default Home
