import React, { useState, useEffect } from 'react';

const TypescriptTest: React.FC<{}> = () => {

    const [date, setDate] = useState<string>('2020-01-01');

    useEffect(() => {
        console.log(date);
    })

    return (
        <div className={'typescript-test'}>
            <form>
                <label>
                    Start Date
                    <input type="date" value={date} onChange={e => setDate(e.target.value)} />
                </label>
            </form>
        </div>
    )
}

export default TypescriptTest;