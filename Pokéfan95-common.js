//This is free and unencumbered software released into the public domain.

//Anyone is free to copy, modify, publish, use, compile, sell, or
//distribute this software, either in source code form or as a compiled
//binary, for any purpose, commercial or non-commercial, and by any
//means.

//In jurisdictions that recognize copyright laws, the author or authors
//of this software dedicate any and all copyright interest in the
//software to the public domain. We make this dedication for the benefit
//of the public at large and to the detriment of our heirs and
//successors. We intend this dedication to be an overt act of
//relinquishment in perpetuity of all present and future rights to this
//software under copyright law.

//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
//EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
//MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
//IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
//OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
//ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
//OTHER DEALINGS IN THE SOFTWARE.

//For more information, please refer to <http://unlicense.org>
window.AjaxDeleteWatchUserTalk = true;
window.AjaxDeleteWatchFile = true;
importScript('MediaWiki:PatrolPageRevisions.js');
importScript('User:Krinkle/SplitRC2.js');
importScript('User:Krinkle/Watchlist-wo-usercreations.js');
importScript('User:Pokéfan95/Watchlist-wo-userrights.js');
importScript('User:Pokéfan95/RecentChanges-wo-userrights.js');
importScript('User:Pokéfan95/RecentChanges-wo-usercreations.js');
importScript('User:Rillke/SVGedit.js');
importScript('User:Rillke/MwJSBot.js');
importScript('User:Rillke/LicenseReview.js'); //
 /*jshint scripturl:true*/
mw.util.addPortletLink('p-tb', 'javascript:importScript("MediaWiki:VisualFileChange.js");', 'Perform batch task', 't-AjaxQuickDeleteOnDemand');
/*jshint scripturl:false*/
// [[File:Krinkle_RTRC.js]]
// mw.loader.load('//meta.wikimedia.org/w/index.php?title=User:Krinkle/RTRC.js&action=raw&ctype=text/javascript');
// [[File:Krinkle_RTRCdev.js]]
mw.loader.load('//meta.wikimedia.org/w/index.php?title=User:Krinkle/RTRC-dev.js&action=raw&ctype=text/javascript');
importScript('User:Magog the Ogre/cleanup.js');
importScript('User:Finnrind/NewPagePatrol.js');
importScript('User:Rillke/bigChunkedUpload.js');
// Linkback: [[User:MusikAnimal/confirmationRollback]]
importScriptURI('https://en.wikipedia.org/w/index.php?action=raw&ctype=text/javascript&title=User:MusikAnimal/confirmationRollback.js');
//<nowiki>

//vFCvFCCfg/////////////////////////////////////
/////// VISUAL FILE CHANGE CONFIGURATION ///////
///// DO NOT MODIFY BY HAND - FINGERS AWAY! ////
////////////////////////////////////////////////
window.vFCSettings = {"userNote":"Yours sincerely,","firstTest":0,"testEdits":0,"defaultAction":"c_replace","watchlistUserTalk":"nochange","watchlistFiles":"nochange","watchlistReplace":"nochange","watchlistOTRS":"nochange","loadBatchSize":100,"maxSimultaneousReq":5,"summaryChacheLen":5,"loadThumbs":true,"loadWikitext":true};
//////////////////////////////////vFCvFCCfgEnd//
//</nowiki>
//<nowiki>

//vFCProfil/////////////////////////////////////
/////// VISUAL FILE CHANGE CONFIGURATION ///////
///// DO NOT MODIFY BY HAND - FINGERS AWAY! ////
////////////////////////////////////////////////
window.vFC_Profiles = {"FOP (Philippines)":{"editInputs":{"mdDeleteReason":"There's no ''[[Commons:Freedom of panorama|freedom of panorama]]'' in the Philippines, and these are not applicable for ''[[Commons:De minimis|de minimis]]''. A free license from the architect is needed.","mdEditSummary":"[[COM:FOP]]","mdReplacePermission":false,"mdDeleteHeading":"Files in [[:Category:Bank of the Philippine Islands on Ayala Avenue, Makati]] ","mdTalkNote":"Yours sincerely,","mdRRegEx1":false,"mdRVar1":true,"mdMatchText1":"","mdReplaceText1":"","selPreserve":"secure","alsoPreserve":""},"action":"del","objectMembers":{"queryParams":{"target":"Category:Bank of the Philippine Islands on Ayala Avenue, Makati","cmdir":"asc","cmsort":"sortkey","cmstartsortkey":""},"startInput":{"mode":"Category","modeCat":true,"modeUser":false,"modePage":false,"target":"Category:Bank of the Philippine Islands on Ayala Avenue, Makati","loadThumbs":true,"loadWikitext":true,"startDate":"","startFile":""}},"proceedAt":{"vals":[],"setVals":["cmcontinue"]},"time":"2016-11-19T19:58:29.408Z"}};
//////////////////////////////////vFCProfilEnd//
//</nowiki>
