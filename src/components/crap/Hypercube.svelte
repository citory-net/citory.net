<style>
    @keyframes r {
        0% {transform:
            rotateX(-20deg) 
            rotateY(0)
        }
        100% {transform:
            rotateX(-20deg) 
            rotateY(360deg)
        }
    }
    @keyframes f {
        0%,
        100%{transform:
            translateY(0)}
        50%{transform:
            translateY(-10px)}
    }
    .c {
        width:              150px;
        height:             150px;
        position:           relative;
        transform-style:    preserve-3d;
        animation:          r 12s linear infinite
    }
    .w {
        animation:          f 4s ease-in-out infinite
    }
    .s {
        width:              150px;
        height:             150px;
        position:           absolute;
        border:             1.5px solid rgba(234, 51, 51, 0.6);
        background:         linear-gradient(135deg,rgba(135, 28, 28, 0.15),rgba(234, 51, 51, 0.08));
        box-shadow:         inset 0 0 30px rgba(234, 51, 51, 0.15),0 0 20px rgba(234, 51, 51, 0.2);
        display:            flex;
        align-items:        center;
        justify-content:    center
    }
    .s svg{
        width:              40px;
        height:             40px;
        stroke:             rgba(234, 51, 51, 0.8);
        fill:               rgba(234, 51, 51, 0.2);
        stroke-width:       2
    }
    
    .hypercube {
        margin:             2.5%;
        display:            flex;
        align-items:        center;
        justify-content:    center;
        perspective:        10000px;
    }
</style>

<div class="hypercube">
    <div class="w">
        <div class="c">
            <div class="s" style="transform:translateZ(75px)">
                <svg viewBox="0 0 24 24">
                    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>
                </svg>
            </div>
            <div class="s" style="transform:rotateY(180deg) translateZ(75px)">
                <svg viewBox="0 0 24 24">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
            </div>
            <div class="s" style="transform:rotateY(90deg) translateZ(75px)">
                <svg viewBox="0 0 24 24">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
                    <path d="M9 8l0 8" />
                    <path d="M9 12l6 0" />
                    <path d="M15 8l0 8" />
                </svg>
            </div>
            <div class="s" style="transform:rotateY(-90deg) translateZ(75px)">
                <svg viewBox="0 0 24 24">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M21 16.008v-8.018a1.98 1.98 0 0 0 -1 -1.717l-7 -4.008a2.016 2.016 0 0 0 -2 0l-7 4.008c-.619 .355 -1 1.01 -1 1.718v8.018c0 .709 .381 1.363 1 1.717l7 4.008c.62 .354 1.38 .354 2 0l7 -4.008c.619 -.355 1 -1.01 1 -1.718" />
                    <path d="M12 22v-10" />
                    <path d="M12 12l8.73 -5.04" />
                    <path d="M3.27 6.96l8.73 5.04" />
                    <path d="M12 17l3.003 -1.668m3 -1.667l2.997 -1.665m-9 5l-9 -5" />
                    <path d="M15 17l3 -1.67v-3l-3 1.67l0 3" />
                </svg>
            </div>
            <div class="s" style="transform:rotateX(90deg) translateZ(75px)">
                <svg viewBox="0 0 24 24">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M21 3v5l-11 9l-4 4l-3 -3l4 -4l9 -11l5 0" />
                    <path d="M5 13l6 6" />
                    <path d="M14.32 17.32l3.68 3.68l3 -3l-3.365 -3.365" />
                    <path d="M10 5.5l-2 -2.5h-5v5l3 2.5" />
                </svg>
            </div>
            <div class="s" style="transform:rotateX(-90deg) translateZ(75px)">
                <svg viewBox="0 0 24 24">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M6 5h12l3 5l-8.5 9.5a.7 .7 0 0 1 -1 0l-8.5 -9.5l3 -5" />
                    <path d="M10 12l-2 -2.2l.6 -1" />
                </svg>
            </div>
        </div>
    </div>
</div>