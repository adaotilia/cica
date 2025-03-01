<script>
    const {data} = $props()
    console.log(data)
</script>
<h1>Cica</h1>
{data.user.username}
<form method="POST">
    <div class="ui input">
        <input type="text" name="cica">
    </div>
</form>