---
description: >-
  Important: Make sure you have AselJS installed too or else, the alerts won't
  close!
---

# Alerts

There are a few types of alerts currently, and those are:

```text
alert alert-primary
alert alert-secondary
alert alert-success
alert alert-warning
alert alert-danger
```

With other types to come!

![This is what they currently look like.](../.gitbook/assets/image%20%282%29.png)

Simply create a alert by doing:

```markup
<div class="alert alert-danger">
    <span class="alert-close" onclick="this.parentElement.style.display='none';">&times;</span>
    <p>Uh oh. An error has occured!</p>
</div>
```

![](../.gitbook/assets/image%20%283%29.png)

