import { statusConsts } from "../../Constants";
import Loading from "./Loading";
import NothingFound from "./Nothing Found";

interface I_ErrorHandling {
    status: string;
}

export default function ErrorHandling({status}: I_ErrorHandling) {

    switch(status) {
        case statusConsts.loading: 
            return <Loading />
        case statusConsts.notFound:
            return <NothingFound />
        default:
            return (
                <div><strong>{status}</strong></div>
            )
    }
}