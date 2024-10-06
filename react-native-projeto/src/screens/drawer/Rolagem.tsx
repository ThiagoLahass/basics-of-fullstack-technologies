import Item from '@/src/components/Item'
import { ScrollView } from 'react-native'

export default function Rolagem() {
    return (
        <ScrollView>
            <Item principal="Item 1" secundario="Descrição do item 1" />
            <Item principal="Item 2" secundario="Descrição do item 2" />
            <Item principal="Item 3" secundario="Descrição do item 3" />
            <Item principal="Item 4" secundario="Descrição do item 4" />
            <Item principal="Item 5" secundario="Descrição do item 5" />
            <Item principal="Item 6" secundario="Descrição do item 6" />
            <Item principal="Item 7" secundario="Descrição do item 7" />
            <Item principal="Item 8" secundario="Descrição do item 8" />
        </ScrollView>
    )
}
