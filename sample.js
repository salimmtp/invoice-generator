const crypto = require('crypto');
console.log(crypto.randomBytes(100).toString('hex'));

function getDeliveryHTMLBack(options) {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style type="text/css">
      * {
        margin: 0;
        padding: 0;
        text-indent: 0;
      }
      .s1 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 22pt;
      }
      .s2 {
        color: black;
        font-family: 'Times New Roman', serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 10pt;
      }
      .s3 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 15pt;
      }
      a {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 15pt;
      }
      h1 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: underline;
        font-size: 22pt;
      }
      .s4 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 14pt;
      }
      .s5 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 14pt;
      }
      h2 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: underline;
        font-size: 18pt;
      }
      h3 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 16pt;
      }
      .s6 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 12pt;
      }
      .s7 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 12pt;
      }
      .s8 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 12pt;
        vertical-align: 3pt;
      }
      .h4 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 15pt;
      }
      p {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: italic;
        font-weight: normal;
        text-decoration: none;
        font-size: 12pt;
        margin: 0pt;
      }
      .s9 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 12pt;
      }
      .s10 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: underline;
        font-size: 12pt;
      }
      table,
      tbody {
        vertical-align: top;
        overflow: visible;
      }
      @media print {
        body {
          width: 100%;
        }
      }
    </style>
  </head>
  <body>
    <table style="table-layout: fixed; width: 100%">
      <tr>
        <td style="text-align: center; padding-top: 40px">
          <img
            style="width: 250px; height: 125px; margin-top: 13px"
            src="data:image/jpeg;base64,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/wBEtXwx/wAEsf2ovhZ8FfgHrWi+NvGuneHtUn16W6jtbtmDNGYYQG4B4JVh+Br9PvFHhnS/Gnh3UdB1uyj1HSNRga2u7SbOyaNhhlOOxFeK/wDDA/7Pn/RKtC/74k/+KpdAKw/4KCfs9/8ARU9EH/A2/wDia9b+GfxT8K/GLwuviLwdrVvr2itM8C3lqSULocMvI7Zryz/hgb9nz/olWhf98yf/ABder/Dn4Y+FfhF4ZTw94O0S28P6KkrzrZ2gIQOxyzck8nFAHSt94/T8a/KbRfj58Qf2A/2tvFGmfF2/8SeKPhtr5Yadql1PLcpFD5heGaIMSMqrFHRcHvg4AP6t4B61g+MfAfhz4haO+keJtD0/XtMc5a11C3WZM/3gGHB9xzQB5Ho37dnwD1zTlvYPip4chiK7tt5eLBIuecFHwwP4V8Qf8FHv2nvBH7Unh/wx8JfhTbyeP/FM2sR3SX2nW7MkOEdPLjbGWL7xnHygLknpX2Lff8E5f2ddQujO/wANLGJ852wXNxGv/fIkxXqHwt/Z5+G3wWWT/hCfBmk+H5ZBte5tYAZ2HoZWy5HtnFMB/wCz18P734U/A3wL4P1K4F1qOiaPbWNxKpyDIkYDAH0B4HsK9CpAMUtIAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKSlooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooASloooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//2Q=="
          />
        </td>
        <td>
          <table style="width: 100%; display: flex; justify-content: center; margin-top: 40px">
            <tr>
              <td>
                <p class="s1" style="text-align: center; margin-bottom: 10px">Majestic Opticals</p>
              </td>
            </tr>
            <tr>
              <td>
                <table>
                  <tr>
                    <td>
                      <img
                        style="margin-top: 2px"
                        width="20"
                        height="24"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAMAAADNlS1EAAADAFBMVEUAAAABAQECAgIDAwMEBAQFBQUGBgYHBwcICAgJCQkKCgoLCwsMDAwNDQ0ODg4PDw8QEBARERESEhITExMUFBQVFRUWFhYXFxcYGBgZGRkaGhobGxscHBwdHR0eHh4fHx8gICAgICAiIiIjIyMkJCQkJCQmJiYnJycoKCgoKCgqKiorKyssLCwsLCwuLi4vLy8wMDAwMDAyMjIzMzM0NDQ0NDQ2NjY3Nzc4ODg4ODg6Ojo7Ozs8PDw8PDw+Pj4/Pz9AQEBBQUFBQUFDQ0NERERFRUVGRkZHR0dISEhJSUlJSUlLS0tMTExNTU1OTk5PT09QUFBRUVFRUVFTU1NUVFRVVVVWVlZXV1dYWFhZWVlZWVlbW1tcXFxdXV1eXl5fX19gYGBhYWFhYWFjY2NkZGRlZWVmZmZnZ2doaGhpaWlpaWlra2tsbGxtbW1ubm5vb29wcHBxcXFxcXFzc3N0dHR1dXV2dnZ3d3d4eHh5eXl5eXl7e3t8fHx9fX1+fn5/f3+AgICBgYGCgoKDg4ODg4OFhYWGhoaHh4eIiIiJiYmKioqLi4uMjIyNjY2Ojo6Pj4+QkJCRkZGSkpKTk5OTk5OVlZWWlpaXl5eYmJiZmZmampqbm5ucnJydnZ2enp6fn5+goKChoaGioqKjo6Ojo6OlpaWmpqanp6eoqKipqamqqqqrq6usrKytra2urq6vr6+wsLCxsbGysrKzs7Ozs7O1tbW2tra3t7e4uLi5ubm6urq7u7u8vLy9vb2+vr6/v7/AwMDBwcHCwsLDw8PDw8PFxcXGxsbHx8fIyMjJycnKysrLy8vMzMzNzc3Ozs7Pz8/Q0NDR0dHS0tLT09PT09PV1dXW1tbX19fY2NjZ2dna2trb29vc3Nzd3d3e3t7f39/g4ODh4eHi4uLj4+Pj4+Pl5eXm5ubn5+fo6Ojp6enq6urr6+vs7Ozt7e3u7u7v7+/w8PDx8fHy8vLz8/Pz8/P19fX29vb39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8OeeLkAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAT9JREFUGJVVkL9KA0EQxr/du/gHRbDzD6SQgJ0WBgn4Cqay9RGsU1mkVasg1oJv4APYGFIJdmJjc9gpIlEU7nZm1pm9GHHZO+b7+H6zswuJUSjw6KDV7PQ/qyBRIpL50WnAOfjFS1IdoR+P18xCBucHyWQR7sKrdmk/qgFhKTTitu+eT+cA1xYzhXvIsVMyV8PcYf6rNrc0cEOKUUuR+xrf0EMKtrWn1W1IZkeTVyxcVusAHoQMP9dy+S0wnWixVLL1lPcGvF84Otv1gD+0kXRW6cMhc/qDmxmnkdT8XoE5mnMDmZhM1wraRX2zUo8TLqGtN0Se+VEg1SkpUvgcPsv2madPJ8TH9hyzrzx9OutdrTqPC6smuG0eOr8ZapFwCxN1syeqRcLrDi+9dEj8w20xcfyHT9K/uFWSOJ0siSg/ndY+tLFU3O8AAAAASUVORK5CYIIA"
                      />
                    </td>
                    <td>
                      <span class="s3">Opp Plaza Tourist Home,<br />Kannur - 670001, Kerala</span>
                    </td>
                  </tr>

                  <tr>
                    <td style="width: 54px">
                      <img
                        width="24"
                        height="24"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAA1BMVEUAAACnej3aAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABNElEQVRIieXVsS5EQRTG8d8SshEJySqJio5Wo/ECKHUKBaVKo1AqPIJKKV6BB9Bo9BKNBsXaBBvZvYq5mzt3szexe68ofMlkJpPJ9585c+YMf6RJzKD2G+YneMcXtqs230GCbtq/ol6V+TieUuNe6+KoKsDSAPNECFdjVNOxaDwdjRPZBdexNSog1oJs13F/VoU5YccPqWmv7ZU1jUOU4DyC1XBXFtCvBj5lF30vZFelupLPpIOqAVNoRpA2VqqGbMgyKcEbVgvWLmN2FMhhH+QDu/IFcF2oWU3syyfNj3SKjvy7uBXezCJa8vf1mEKHqsLHfSdJUmhnwHwPVBTOQm0KNWlQreqN41PODwuAOdwIMS8yToQQlvqoFnCBZ/lTtHGJiXhx2S9xTYh3C9d4Ken3H/UNy0JtlX15244AAAAASUVORK5CYIIA"
                      />
                    </td>
                    <td style="text-align: center"><span class="s3">9447969366</span></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        width="22"
                        height="17"
                        style="margin-top: 5px"
                        src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAARABYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD6R8P6Poj+HPDXj/4laFH4k8PeJrRbvU/Et1cTyS6NdyyOwEqF9kdjtaONTGqiHZl8q7SJ6z4u+DPwX8CeGrvX9b8OadZaXbKGabMrlyxCoiKrFnd2KqqKCzMwABJArzjwBr0/i34XeGfhumuWXhXSdOsDp3irUpdQhiv0ljd4ptOgiLb4pDsJedgNsboYtzOHj3H+BHgHyoraH4n31vp2jss3hSxXWojH4bmByJIckmbBG1VnMipGzxqAjEFAeYfFHX/En7OnhTS/HXhzRY/Atxrl7LZJ4ZaeSeNLMojxSXcTSNGLsGNyTEAFWYxkybQ9FJ+0vfeJ/jd4R0DwVDZ2GtePNLvZru5i8PXUdxBd2aRqgvkUOzQo7TKvly4YOsgUyKm8lIDnP22P+S2z/wDXjB/I14HRRQwPtz9gX/kTPE//AF/R/wDoFFFFUB//2QAA"
                      />
                    </td>
                    <td><span class="s3">ajesticoptical@gmail.com</span></td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    <table style="table-layout: fixed; width: 100%; border-top: 3px solid #000; margin-top: 10px; padding-top: 15px">
      <tr>
        <td></td>
        <td>
          <p class="s1" style="margin-bottom: 10px; text-decoration: underline; font-weight: bold">INVOICE</p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="s4" style="padding-left: 10pt; text-indent: 0pt; line-height: 17pt; text-align: left">
            Customer Name : <span class="s5">Daniel Joseph </span>
          </p>
        </td>
        <td>
          <p class="s4" style="text-indent: 0pt; line-height: 17pt; text-align: left">
            Invoice Number : <span class="s5">AHSN-2014-00360</span>
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="s4" style="padding-left: 10pt; text-indent: 0pt; line-height: 17pt; text-align: left">
            Mobile Number : <span class="s5">9056189015 </span>
          </p>
        </td>
        <td>
          <p class="s4" style="text-indent: 0pt; line-height: 17pt; text-align: left">
            Invoice Date : <span class="s5">26/01/2024</span>
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="s4" style="padding-left: 10pt; text-indent: 0pt; line-height: 17pt; text-align: left">
            Address : <span class="s5"> Parambakkal House, Pazhayangadi </span>
          </p>
        </td>
        <td>
          <p class="s4" style="text-indent: 0pt; line-height: 17pt; text-align: left">
            Date Of Order : <span class="s5">26/01/2024</span>
          </p>
        </td>
      </tr>
      <tr>
        <td></td>
        <td>
          <p class="s4" style="text-indent: 0pt; line-height: 17pt; text-align: left">
            Date Of Delivery : <span class="s5">26/01/2024</span>
          </p>
        </td>
      </tr>
    </table>
    <table style="table-layout: fixed; width: 100%; border-top: 3px solid #000; margin-top: 10px; padding-top: 15px"></table>
    <h2 style="padding-top: 1pt; padding-left: 11pt; text-indent: 0pt; text-align: center">PRESCRIPTION</h2>
    <table style="table-layout: fixed; width: 100%">
      <tr>
        <td>
          <h3 style="padding-left: 1pt; text-indent: 0pt; text-align: center">RIGHT EYE (OD)</h3>
        </td>
        <td>
          <h3 style="padding-left: 1pt; text-indent: 0pt; text-align: center">LEFT EYE (OS)</h3>
        </td>
      </tr>
    </table>
    <table style="border-collapse: collapse; margin-left: 5.4pt; width: 98%" cellspacing="0">
      <tr style="height: 15pt">
        <td
          style="
            width: 35pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 78pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p class="s6" style="padding-left: 24pt; padding-right: 24pt; text-indent: 0pt; line-height: 14pt; text-align: center">
            SPH
          </p>
        </td>
        <td
          style="
            width: 78pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p class="s6" style="padding-left: 24pt; padding-right: 24pt; text-indent: 0pt; line-height: 14pt; text-align: center">
            CYL
          </p>
        </td>
        <td
          style="
            width: 76pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 2pt;
          "
        >
          <p class="s6" style="padding-left: 24pt; text-indent: 0pt; line-height: 14pt; text-align: left">AXIS</p>
        </td>
        <td
          style="
            width: 38pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 2pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 78pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p class="s6" style="padding-left: 24pt; padding-right: 24pt; text-indent: 0pt; line-height: 14pt; text-align: center">
            SPH
          </p>
        </td>
        <td
          style="
            width: 77pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p class="s6" style="padding-left: 24pt; padding-right: 23pt; text-indent: 0pt; line-height: 14pt; text-align: center">
            CYL
          </p>
        </td>
        <td
          style="
            width: 79pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p class="s6" style="padding-left: 24pt; padding-right: 24pt; text-indent: 0pt; line-height: 14pt; text-align: center">
            AXIS
          </p>
        </td>
      </tr>
      <tr style="height: 15pt">
        <td
          style="
            width: 35pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p class="s6" style="padding-left: 5pt; padding-right: 5pt; text-indent: 0pt; line-height: 14pt; text-align: center">
            DV
          </p>
        </td>
        <td
          style="
            width: 78pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p class="s7" style="padding-left: 24pt; padding-right: 24pt; text-indent: 0pt; line-height: 14pt; text-align: center">
            +0.75
          </p>
        </td>
        <td
          style="
            width: 78pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p class="s7" style="padding-left: 24pt; padding-right: 24pt; text-indent: 0pt; line-height: 14pt; text-align: center">
            -0.20
          </p>
        </td>
        <td
          style="
            width: 76pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 2pt;
          "
        >
          <p class="s7" style="padding-left: 23pt; text-indent: 0pt; line-height: 14pt; text-align: left">-0.40</p>
        </td>
        <td
          style="
            width: 38pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 2pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p class="s6" style="padding-left: 6pt; padding-right: 5pt; text-indent: 0pt; line-height: 14pt; text-align: center">
            DV
          </p>
        </td>
        <td
          style="
            width: 78pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p class="s7" style="padding-left: 24pt; padding-right: 24pt; text-indent: 0pt; line-height: 14pt; text-align: center">
            -0.67
          </p>
        </td>
        <td
          style="
            width: 77pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p class="s7" style="padding-left: 24pt; padding-right: 24pt; text-indent: 0pt; line-height: 14pt; text-align: center">
            +0.40
          </p>
        </td>
        <td
          style="
            width: 79pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p class="s7" style="padding-left: 24pt; padding-right: 24pt; text-indent: 0pt; line-height: 14pt; text-align: center">
            -0.05
          </p>
        </td>
      </tr>
      <tr style="height: 15pt">
        <td
          style="
            width: 35pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p class="s6" style="padding-left: 5pt; padding-right: 5pt; text-indent: 0pt; line-height: 14pt; text-align: center">
            NV
          </p>
        </td>
        <td
          style="
            width: 78pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p class="s7" style="padding-left: 24pt; padding-right: 23pt; text-indent: 0pt; line-height: 14pt; text-align: center">
            -1.25
          </p>
        </td>
        <td
          style="
            width: 78pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p class="s7" style="padding-left: 24pt; padding-right: 24pt; text-indent: 0pt; line-height: 14pt; text-align: center">
            +0.60
          </p>
        </td>
        <td
          style="
            width: 76pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 2pt;
          "
        >
          <p class="s7" style="padding-left: 23pt; text-indent: 0pt; line-height: 14pt; text-align: left">-0.75</p>
        </td>
        <td
          style="
            width: 38pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 2pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p class="s6" style="padding-left: 6pt; padding-right: 5pt; text-indent: 0pt; line-height: 14pt; text-align: center">
            NV
          </p>
        </td>
        <td
          style="
            width: 78pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p class="s7" style="padding-left: 24pt; padding-right: 24pt; text-indent: 0pt; line-height: 14pt; text-align: center">
            +1.8
          </p>
        </td>
        <td
          style="
            width: 77pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p class="s7" style="padding-left: 24pt; padding-right: 23pt; text-indent: 0pt; line-height: 14pt; text-align: center">
            -2.25
          </p>
        </td>
        <td
          style="
            width: 79pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p class="s7" style="padding-left: 24pt; padding-right: 24pt; text-indent: 0pt; line-height: 14pt; text-align: center">
            +0.25
          </p>
        </td>
      </tr>
      <tr style="height: 15pt">
        <td
          style="
            width: 35pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p class="s6" style="padding-left: 5pt; padding-right: 5pt; text-indent: 0pt; line-height: 14pt; text-align: center">
            ADD
          </p>
        </td>
        <td
          style="
            width: 78pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p class="s7" style="padding-left: 24pt; padding-right: 24pt; text-indent: 0pt; line-height: 14pt; text-align: center">
            +1.25
          </p>
        </td>
        <td
          style="
            width: 78pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p class="s6" style="padding-left: 24pt; padding-right: 24pt; text-indent: 0pt; line-height: 14pt; text-align: center">
            PD
          </p>
        </td>
        <td
          style="
            width: 76pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 2pt;
          "
        >
          <p class="s7" style="padding-left: 23pt; text-indent: 0pt; line-height: 14pt; text-align: left">-1.68</p>
        </td>
        <td
          style="
            width: 38pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 2pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p class="s6" style="padding-left: 6pt; padding-right: 5pt; text-indent: 0pt; line-height: 14pt; text-align: center">
            ADD
          </p>
        </td>
        <td
          style="
            width: 78pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p class="s7" style="padding-left: 24pt; padding-right: 24pt; text-indent: 0pt; line-height: 14pt; text-align: center">
            -3.45
          </p>
        </td>
        <td
          style="
            width: 77pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p class="s6" style="padding-left: 24pt; padding-right: 23pt; text-indent: 0pt; line-height: 14pt; text-align: center">
            PD
          </p>
        </td>
        <td
          style="
            width: 79pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p class="s7" style="padding-left: 23pt; padding-right: 24pt; text-indent: 0pt; line-height: 14pt; text-align: center">
            +2.5
          </p>
        </td>
      </tr>
    </table>
    <p style="text-indent: 0pt; text-align: left"><br /></p>
    <table style="border-collapse: collapse; margin-left: 5.4pt; width: 98%" cellspacing="0">
      <tr style="height: 15pt">
        <td
          style="
            width: 56pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p class="s6" style="padding-left: 5pt; text-indent: 0pt; line-height: 13pt; text-align: left">SL NO</p>
        </td>
        <td
          style="
            width: 291pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p class="s6" style="padding-left: 5pt; text-indent: 0pt; line-height: 13pt; text-align: left">PRODUCT DETAILS</p>
        </td>
        <td
          style="
            width: 85pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p class="s6" style="padding-left: 5pt; text-indent: 0pt; line-height: 13pt; text-align: left">QTY</p>
        </td>
        <td
          style="
            width: 106pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p class="s6" style="padding-left: 5pt; text-indent: 0pt; line-height: 13pt; text-align: left">PRICE</p>
        </td>
      </tr>
      <tr style="height: 30pt">
        <td
          style="
            width: 56pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p class="s7" style="padding-left: 5pt; text-indent: 0pt; text-align: left">1</p>
        </td>
        <td
          style="
            width: 291pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p class="s7" style="padding-left: 5pt; text-indent: 0pt; line-height: 15pt; text-align: left">
            VINCENT CHASE EYEWEAR Unisex Adult Aviator Polarization Sunglasses
          </p>
        </td>
        <td
          style="
            width: 85pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p class="s7" style="padding-left: 5pt; text-indent: 0pt; text-align: left">2.00</p>
        </td>
        <td
          style="
            width: 106pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p class="s7" style="padding-left: 5pt; text-indent: 0pt; text-align: left">200.00</p>
        </td>
      </tr>
      <tr style="height: 30pt">
        <td
          style="
            width: 56pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p class="s7" style="padding-left: 5pt; text-indent: 0pt; text-align: left">2</p>
        </td>
        <td
          style="
            width: 291pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p class="s7" style="padding-left: 5pt; text-indent: 0pt; line-height: 15pt; text-align: left">
            LENSKART BLU | Zero Power Blue Cut Computer Glasses
          </p>
          <p class="s7" style="padding-left: 5pt; text-indent: 0pt; line-height: 13pt; text-align: left">
            | Anti Glare, Lightweight |
          </p>
        </td>
        <td
          style="
            width: 85pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p class="s7" style="padding-left: 5pt; text-indent: 0pt; text-align: left">2.00</p>
        </td>
        <td
          style="
            width: 106pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p class="s7" style="padding-left: 5pt; text-indent: 0pt; text-align: left">333.00</p>
        </td>
      </tr>
    </table>
    <p style="text-indent: 0pt; text-align: left"><br /></p>
    <table style="table-layout: fixed; width: 100%">
      <tr>
        <td>
          <h3 style="text-indent: 0pt; line-height: 17pt">
            <p class="s8" style="padding-top: 9pt; margin-left: 5.4pt">
              <span class="h4"> Total Paid : 1,066.00</span>
            </p>
          </h3>
        </td>
        <td>
          <h3 style="text-indent: 0pt; line-height: 17pt">
            <p class="s8" style="padding-top: 9pt; text-align: right;">
              <span class="h4" style="padding-right: 15px;"> Net Total Amount : 1,119.30</span>
            </p>
          </h3>
        </td>
      </tr>
    </table>

    <p style="text-indent: 0pt; text-align: left"><br /></p>
    <p style="padding-top: 2pt; padding-left: 5pt; text-indent: 0pt; text-align: left">Working hours 9.30 AM to 8 PM</p>
    <p style="padding-top: 9pt; padding-left: 5pt; text-indent: 0pt; text-align: left">
      N.B: To be produce for collection. Please collect the article within 30 days from delivery date
    </p>
    <p style="text-indent: 0pt; text-align: left"><br /></p>
    <p class="s9" style="padding-top: 2pt; text-indent: 0pt; text-align: right;padding-right:15px;">AUTHORISED SIGNATORY</p>
    <p style="text-indent: 0pt; text-align: left"><br /></p>
    <p class="s10" style="padding-top: 2pt; padding-left: 11pt; text-indent: 0pt; text-align: center">SUNDAY HOLIDAY</p>
  </body>
</html>
  `;
}
