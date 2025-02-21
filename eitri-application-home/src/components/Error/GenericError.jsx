import Eitri from "eitri-bifrost";
import { Text, View, Button } from "eitri-luminus";
import ErrorImage from '../../assets/images/error_eitri.svg';

export default function GenericError(props) {
    const {title, bodyText, retryButtonLabel, onRetryPress = null} = props

    function goBack(){
        Eitri.navigation.back()
    }

    return (
        <View className="flex items-center justify-center min-h-screen">
            <View className="flex flex-col w-full h-full max-w-md rounded-2xl">
                <View className="h-full mx-4">
                    <Image
                        src={ErrorImage}
                        className={`w-full h-full`}
                        alt={"Image Error"}
                    />
                </View>
                <View className="flex flex-col h-full p-4">
                    <Text className="font-bold text-[20px] mb-4">
                        {title || "Ops! Houve um erro"}
                    </Text>
                    <Text className="!text-[14px]">
                        {bodyText || "Desculpe, ocorreu um erro inesperado. Por favor, tente novamente mais tarde. Se o problema persistir, entre em contato com o suporte"}
                    </Text>
                </View>
                <View className="absolute bottom-[8%] left-1/2 transform -translate-x-1/2 flex justify-evenly w-full">
                    <Button className="btn bg-white text-black flex items-center border-1 border-[#000] px-0 shadow-none pb-0 w-[40%]" onClick={goBack}>
                        Voltar
                    </Button>
                    <Button className="btn bg-black text-white flex items-center px-0 shadow-none pb-0 w-[40%]" onClick={onRetryPress}>
                        {retryButtonLabel || "Tentar novamente"}
                    </Button>
                </View>
            </View>
        </View>
    )
}




