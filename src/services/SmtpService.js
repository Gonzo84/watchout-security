import {Component} from 'react';

class SmtpService extends Component {

    send = (a) => {
        return new Promise((n, e) => {
            a.nocache = Math.floor(1e6 * Math.random() + 1);
            a.Action = "Send";
            let t = JSON.stringify(a);
            this.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, (e) => {
                n(e)
            })
        })
    };
    ajaxPost = (e, n, t) => {
        let a = this.createCORSRequest("POST", e);
        a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = () => {
            var e = a.responseText;
            null != t && t(e)
        };
        a.send(n);
    };
    ajax = (e, n) => {
        let t = this.createCORSRequest("GET", e);
        t.onload = () => {
            let e = t.responseText;
            null != n && n(e)
        };
        t.send();
    };
    createCORSRequest = (e, n) => {
        let t = new XMLHttpRequest;
        return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t
    }
    // send = (e, o, t, n, a, s, r, c) => {
    //     let d = Math.floor(1e6 * Math.random() + 1);
    //     let i = `From=${e}&amp;to=${o}&amp;Subject=${encodeURIComponent(
    //         t
    //     )}&amp;Body=${encodeURIComponent(n)}`;
    //
    //     if (!a.token) {
    //         i += `&amp;Host=${a}&amp;Username=${s}&amp;Password=${r}&amp;Action=Send`;
    //     } else {
    //         i += `&amp;SecureToken=${a.token}&amp;Action=SendFromStored`;
    //         c = a.callback;
    //     }
    //     i += '&amp;cachebuster=' + d;
    //
    //     this.ajaxPost('https://smtpjs.com/v2/smtp.aspx?', i, c);
    // };
    // sendWithAttachment = (e, o, t, n, a, s, r, c, d) => {
    //     let i = Math.floor(1e6 * Math.random() + 1);
    //     let m = `From=${e}&amp;to=${o}&amp;Subject=${encodeURIComponent(
    //         t
    //     )}&amp;Body=${encodeURIComponent(n)}&amp;Attachment=${encodeURIComponent(c)}`;
    //
    //     if (!a.token) {
    //         m += `&amp;Host=${a}&amp;Username=${s}&amp;Password=${r}&amp;Action=Send`;
    //     } else {
    //         m += `&amp;SecureToken=${a.token}&amp;Action=SendFromStored`;
    //     }
    //
    //     m += `&amp;cachebuster=${i}`;
    //
    //     this.ajaxPost('https://smtpjs.com/v2/smtp.aspx?', m, d);
    // };
    // ajaxPost = (e, o, t) => {
    //     let n = this.createCORSRequest('POST', e);
    //     n.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    //     n.onload = () => {
    //         let e = n.responseText;
    //         if (t) t(e);
    //     };
    //     n.send(o);
    // };
    // ajax = (e, o) => {
    //     let t = this.createCORSRequest('GET', e);
    //     t.onload = () => {
    //         let e = t.responseText;
    //         if (o) o(e);
    //     };
    //     t.send();
    // };
    // createCORSRequest = (e, o) => {
    //     let t = new XMLHttpRequest();
    //     return (
    //         'withCredentials' in t
    //             ? t.open(e, o, !0)
    //             : 'undefined' !== typeof XDomainRequest
    //             ? (t = new XDomainRequest()).open(e, o)
    //             : (t = null),
    //             t
    //     );
    // };
}

export default SmtpService;
