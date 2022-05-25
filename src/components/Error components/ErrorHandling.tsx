import ErrorOccured from "./Error Occured";
import Loading from "./Loading";
import NothingFound from "./Nothing Found";

export enum errorStatus {
    ready,
    loading,
    notFound,
    error
}

export default function ErrorHandling({status}: {status: number}) {

    switch(status) {
        case errorStatus.loading: 
            return <Loading />
        case errorStatus.notFound:
            return <NothingFound />
        case errorStatus.error:
            return <ErrorOccured />
        default:
            return (
                <div><strong>{status}</strong></div>
            )
    }
}