import { Button, Text, View } from "react-native";

export default function ContentPage(props: any) {
    return (
        <View>
            <Text>ContentPage</Text>
            <Button
                title="Voltar"
                onPress={() => props.navigation.goBack()}
            />
        </View>
    )
}
