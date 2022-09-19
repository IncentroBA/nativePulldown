'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function getProperties(values, defaultProperties) {
  // Do the values manipulation here to control the visibility of properties in Studio and Studio Pro conditionally.

  /* Example
  if (values.myProperty === "custom") {
      delete defaultProperties.properties.myOtherProperty;
  }
  */
  return defaultProperties;
}

function check(values) {
  var errors = []; // Add errors to the above array to throw errors in Studio and Studio Pro.

  /* Example
  if (values.myProperty !== "custom") {
      errors.push({
          property: `myProperty`,
          message: `The value of 'myProperty' is different of 'custom'.`,
          url: "https://github.com/myrepo/mywidget"
      });
  }
  */

  return errors;
} // export function getPreview() {
//     return {
//         type: "Image",
//         document: decodeURIComponent(
//             "%3Csvg id='a' xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Cpath d='M32,47.1c4.2,0,8.2-1.1,11.7-2.9l-1.3-20.2c0-5.8-4.7-11.4-10.4-11.4s-10.4,5.7-10.4,11.4l-1.3,20.2c3.5,1.9,7.5,2.9,11.7,2.9Z' fill='%23f4dbc3'/%3E%3Cpath d='M32,47.1c4.2,0,8.2-1.1,11.7-2.9l-1.3-20.2c0-5.8-4.7-10.4-10.4-10.4s-10.4,4.7-10.4,10.4l-1.3,20.2c3.5,1.9,7.5,2.9,11.7,2.9Z' fill='%23eacba9'/%3E%3Cpath d='M22.5,45.3l9.5-31.7c-5.8,0-10.4,4.7-10.4,10.4l-1.3,20.2c.7,.4,1.5,.7,2.2,1.1Z' fill='%23ead4b5'/%3E%3Cpath d='M42.4,24.1c0-5.8-4.7-10.4-10.4-10.4V47.2c4.2,0,8.2-1.1,11.7-2.9,0,0-1.3-20.2-1.3-20.2Z' fill='%23e5bb98'/%3E%3Cpath d='M39.8,22.7c0,3-3.5,6.9-7.8,6.9s-7.7-3.9-7.7-6.9,3.5-5.4,7.7-5.4,7.8,2.4,7.8,5.4Z' fill='%23f9edd7'/%3E%3Cpath d='M32,18.1c-4.1,0-7.4,2.2-7.7,5,.3,2.9,3.6,6.5,7.7,6.5s7.4-3.6,7.7-6.5c-.3-2.8-3.6-5-7.7-5Z' fill='%23f4e6d0'/%3E%3Cpath d='M24.3,23.1c.1,1.5,1.1,3.2,2.7,4.5l3.4-9.4c-3.4,.5-5.9,2.5-6.1,4.9Z' fill='%23f9eee1'/%3E%3Cpath d='M32,29.6c4.1,0,7.4-3.6,7.7-6.5-.3-2.8-3.6-5-7.7-5' fill='%23efd9c2'/%3E%3Cpath d='M35.6,28.6c-1.1-.4-2.3-.6-3.6-.6s-2.5,.2-3.6,.6c1.1,.6,2.3,1,3.6,1s2.5-.4,3.6-1Z' fill='%23efd9c2'/%3E%3Cpath d='M48,24.9c-.8,0-1.5-.7-1.5-1.5,0-8-6.5-14.5-14.5-14.5s-14.5,6.5-14.5,14.5c0,.8-.7,1.5-1.5,1.5s-1.5-.7-1.5-1.5c0-9.7,7.9-17.5,17.5-17.5s17.5,7.9,17.5,17.5c0,.8-.7,1.5-1.5,1.5Z' fill='%23fe5000'/%3E%3Cg%3E%3Cpath d='M32,58.1l-4.7-4.7c-.6-.6-.6-1.5,0-2.1s1.5-.6,2.1,0l2.6,2.6,2.6-2.6c.6-.6,1.5-.6,2.1,0s.6,1.5,0,2.1l-4.7,4.7Z' fill='%23fe5000'/%3E%3Cpath d='M32,55.1c-.6,0-1-.4-1-1v-3.9c0-.6,.4-1,1-1s1,.4,1,1v3.9c0,.6-.4,1-1,1Z' fill='%23fe5000'/%3E%3C/g%3E%3C/svg%3E"
//         ),
//         width: 64,
//         height: 64
//     };
// }


exports.check = check;
exports.getProperties = getProperties;
