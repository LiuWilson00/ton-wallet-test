import { Locales, useTonConnectUI } from '@tonconnect/ui-react';

export const Settings = () => {
    const [tonConnectUI, setOptions] = useTonConnectUI();
    const transaction = {
        validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
        messages: [
            {
                address: "UQAkHkrzInM6VkmNduqBC5usSrOdcWkIKDdgJcXK2_yZyBPu",
                amount: "10000000",
             // payload: "base64bocblahblahblah==" // just for instance. Replace with your transaction payload or remove
            }
        ]
    }
    const onLanguageChange = (lang: string) => {
        setOptions({ language: lang as Locales });
    };

    return (
        <div>
            <button onClick={() => tonConnectUI.sendTransaction(transaction)}>
                發送交易
            </button>

            <div>
                <label>language</label>
                <select onChange={e => onLanguageChange(e.target.value)}>
                    <option value="en">en</option>
                    <option value="cn">cn</option>
                    <option value="ru">ru</option>
                </select>
            </div>
        </div>
    );
};

export default Settings;