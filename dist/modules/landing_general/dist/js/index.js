const controller=new ScrollMagic.Controller({globalSceneOptions:{triggerHook:"onLeave",duration:"200%"}}),slide=document.querySelector(".stage");new ScrollMagic.Scene({triggerElement:slide,triggerHook:.9,duration:"80%",offset:50}).setClassToggle("#magicBtn","visible").addTo(controller);