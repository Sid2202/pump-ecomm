import React from 'react'

function test() {
    return (
        <div>
            <form action="backend/text.php" method="post">
                <input type="text" name="text"/>
                <button type="submit" name="submit"/>
            </form>
        </div>
    )
}

export default test
