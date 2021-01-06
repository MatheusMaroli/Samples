export default function Listener(): {
    emit: (param: any) => void;
    subscribe: (fn: any) => void;
};
