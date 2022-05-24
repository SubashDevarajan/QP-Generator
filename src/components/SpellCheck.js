const SpellCheck = () => {
    return (
        <>
            <textarea name="myTextArea" id="myTextArea" cols="30" rows="4" style='max-width:500px;width:100%;height:200px;margin-bottom:20px'>
                This this is a simple exampl of Spell-checking As-You-Type using javascript spellcheck.
                It works in almost any browser, and supports upto 24 international languages.
                The button bellow shows an alternative way to spellcheck using javascript spellcheck - using a dialog iwndow!
            </textarea>
            <input type="button" value="Spell Check in a Dialog" onclick="$Spelling.SpellCheckInWindow('myTextArea')" />
        </>

    )
}