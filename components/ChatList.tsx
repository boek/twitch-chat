import React from 'react';
import { Text, View } from 'react-native';

const UserText = () => (
    <Text className="font-bold text-black dark:text-pink-500">Boek</Text>
)

const MessageSeparator = () => (
    <Text className="text-black dark:text-white">: </Text>
)

const MessageText = () => (
    <Text className="text-black dark:text-white">Hello the quick brown fox jumped over the lazy dog and we want it to wrap around</Text>
)

const ChatListItem = () => (
    <Text>
        <UserText />
        <MessageSeparator />
        <MessageText />
    </Text>
)

export default function ChatList() {
    return (
        <View className="p-2">
            <ChatListItem />
        </View>
        )
}