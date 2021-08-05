$(document).ready(function() {
    $("#submit").click(function() {
        $("form").submit();
        if (
            $("#name").val() > "" &&
            $("#email")
            .val()
            .match(
                "[A-Za-z0-9._%+-]{2,}@[a-zA-Z]{1,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})"
            ) &&
            $("textarea").val() > ""
        )
            alert("Thank you for contacting us");
    });
});