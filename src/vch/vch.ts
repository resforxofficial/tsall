import vch_dv from './vch_dv';
import vch_va from './vch_va';
import vch_name from './vch_giv';

export const variableall = (vxv: string) => {
    vch_dv(vxv);
    vch_va(vxv);
    vch_name(vxv);
}

export const realvariable = (ovx: string) => {
    variableall(ovx);
}

export const variableallof = (v: string, x: string, v1: string) => {
    vch_dv(v);
    vch_va(x);
    vch_name(v1);
}