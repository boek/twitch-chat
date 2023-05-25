import React from 'react';
import { Text, View } from 'react-native';
import { FlashList } from "@shopify/flash-list";

type Message = {
    username: string
    message: string
}

const useChatLog = () => {
    return [
        {
            username: "itsboek",
            message: "Hello the quick brown fox jumped over the lazy dog and we want it to wrap around"
        },
        {
            username: "itsboek",
            message: "Hello the quick brown fox jumped over the lazy dog and we want it to wrap around"
        },
        {
            username: "itsboek",
            message: "Hello the quick brown fox jumped over the lazy dog and we want it to wrap around"
        },
        {
            username: "itsboek",
            message: "Hello the quick brown fox jumped over the lazy dog and we want it to wrap around"
        },
        {
            username: "itsboek",
            message: "Hello the quick brown fox jumped over the lazy dog and we want it to wrap around"
        },
        {
            username: "itsboek",
            message: "Hello the quick brown fox jumped over the lazy dog and we want it to wrap around"
        },
        {
            username: "itsboek",
            message: "Hello the quick brown fox jumped over the lazy dog and we want it to wrap around"
        },
        {
            username: "itsboek",
            message: "Hello the quick brown fox jumped over the lazy dog and we want it to wrap around"
        },
        {
            username: "itsboek",
            message: "Hello the quick brown fox jumped over the lazy dog and we want it to wrap around"
        },
    ]
}

const UserText = ({ name }: { name: string }) => (
    <Text className="font-bold text-pink-500 dark:text-pink-500">{name}</Text>
)

const MessageSeparator = () => (
    <Text className="text-black dark:text-white">: </Text>
)

const MessageText = ({ message }: { message: string }) => (
    <Text className="text-black dark:text-white">{message}</Text>
)

const ChatListItem = ({ item }: { item: Message }) => (
    <Text className="p-1">
        <UserText name={item.username} />
        <MessageSeparator />
        <MessageText message={item.message} />
    </Text>
)

export default function ChatList() {
    const messages = useChatLog()
    return (
        <View className="flex-1 p-2">
            <FlashList
                renderItem={({ item }: { item : Message }) => {
                    return <ChatListItem item={item} />
                }}
                estimatedItemSize={50}
                data={messages}/>
        </View>
        )
}