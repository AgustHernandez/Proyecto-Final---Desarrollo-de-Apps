import React, { useState } from 'react'

import { View } from 'react-native';

function ItemList() {
    const [ listItem, setListItem ] = useState([{id:1, value:'Juan'},{id:2, value:'Pedro'}]);

    return (
        <View style={styles.listItemContainer}>
            <FlatList
                data={listItem}
                renderItem={renderItem}
                keyExtractor={ item => item.id }
            />
        </View>
    )
}

export default ItemList