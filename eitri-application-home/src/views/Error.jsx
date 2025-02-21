import Eitri from 'eitri-bifrost'
import GenericError from 'src/components/Error/GenericError'
export default function Error() {
    const navigateToHome = () => {
        Eitri.navigation.navigate({
            path: 'Home',
        })
    }

    return (
        <Page topInset bottomInset>
            <GenericError 
                title = "" 
                bodyText = "" 
                retryButtonLabel = ""
                onRetryPress={navigateToHome}
            />
        </Page>
    )
}
