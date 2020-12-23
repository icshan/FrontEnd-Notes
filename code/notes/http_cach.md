**浏览器缓存机制（http缓存）**
web缓存分为很多种：
  1. 数据库缓存
  2. 代理服务器缓存
  3. CDN缓存
  4. 浏览器缓存
浏览器缓存状态是由header决定的，header的参数有四种：
  1. Cache-Control
    - `max-age` 设置魂村最大的有效时间  普通缓存 
    tip：`max-age` 会覆盖 `Expires`
    - `s-maxage` 同 `max-age`，只用于共享缓存（比如CDN缓存），如果存在 `s-maxage`，则会覆盖掉`max-age` 和 `Expores header`
    - `public` 指定响应会被缓存，并且在多用户间共享。 默认 `pubic`,同反：`private`
    - `private` 响应制作Wie私有的缓存，不能在用户间共享，如果要求HTTP认证，响应会自动设置为 `private`
    - `no-cache` 指定不缓存响应，表明资源不进行缓存 ，但是设置了`no-cache`之后并不代表浏览器不缓存，而是在缓存前，要向服务器确认资源是否被更改。因此有的时候设置`no-cache`防止缓存是不够保险的，还可以加上`private`指令，将过期时间设置过去的时候。

