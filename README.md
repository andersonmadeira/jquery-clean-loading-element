# jquery-clean-loading-element

Displays a loading spinner overlay on top of elements

### How to use

To add:

```js
$('selector').loadingBox('add');
```

With options:

```js
$('selector').loadingBox('add', {
    primaryColor: 'red',
    width: 2,
    radius: 50,
    speed: 0.5
});
```

To remove: 

```js
$('selector').loadingBox('rm');
```

### Customizing the style of spinners:

To change the style you can pass any of the following options:

Name          |  Type   | Unit            | Default value
------------- | --------|-----------------|--------------
primaryColor  | String  | Hex Color Value | #3498db
Content Cell  | String  | Hex Color Value | #f3f3f3
width         | Integer | pixels          | 5
radius        | Float   | number          | 0 (auto)
speed         | Float   | pixels          | 0.5

### Roadmap

Version 1:

- [x] Change spinner style
- [ ] onFinish Callback
- [ ] Independence of stylesheet

### Browser Suport

Any modern ES5 compliant browser (except IE9 and down*) are known to run smoothly.

\* _due to CSS3 keyframes support_
