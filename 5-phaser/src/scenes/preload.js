import Phaser from "phaser";
import cBG from "../assets/casino-background.png";
import table from "../assets/Table.png";
import vwall from "../assets/vertical-wall.png";
import dude from "../assets/square.png";
import arcade from "../assets/arcade.png"
import sky from "../assets/sky.png";
import carLeft from "../assets/64/1pix64.png";
import carRight from "../assets/64/Right/1Rpix64.png";
import ground from "../assets/platform.png"
import ramp from "../assets/ramp.png"
import bjTable from "../assets/table2.png"

import AC from '../assets/cards/aceclub.png';
import AH from '../assets/cards/aceheart.png';
import AD from '../assets/cards/acediamond.png';
import AS from '../assets/cards/acespade.png';
import KC from '../assets/cards/kingclub.png';
import KH from '../assets/cards/kingheart.png';
import KD from '../assets/cards/kingdiamond.png';
import KS from '../assets/cards/kingspade.png';
import QC from '../assets/cards/queenclub.png';
import QH from '../assets/cards/queenheart.png';
import QD from '../assets/cards/queendiamond.png';
import QS from '../assets/cards/queenspade.png';
import JC from '../assets/cards/jackclub.png';
import JH from '../assets/cards/jackheart.png';
import JD from '../assets/cards/jackdiamond.png';
import JS from '../assets/cards/jackspade.png';
import TC from '../assets/cards/tenclub.png';
import TH from '../assets/cards/tenheart.png';
import TD from '../assets/cards/tendiamond.png';
import TS from '../assets/cards/tenspade.png';
import C9 from '../assets/cards/nineclub.png';
import H9 from '../assets/cards/nineheart.png';
import D9 from '../assets/cards/ninediamond.png';
import S9 from '../assets/cards/ninespade.png'; 
import C8 from '../assets/cards/eightclub.png';
import H8 from '../assets/cards/eightheart.png';
import D8 from '../assets/cards/eightdiamond.png';
import S8 from '../assets/cards/eightspade.png'; 
import C7 from '../assets/cards/sevenclub.png';
import H7 from '../assets/cards/sevenheart.png';
import D7 from '../assets/cards/sevendiamond.png';
import S7 from '../assets/cards/sevenspade.png'; 
import C6 from '../assets/cards/sixclub.png';
import H6 from '../assets/cards/sixheart.png';
import D6 from '../assets/cards/sixdiamond.png';
import S6 from '../assets/cards/sixspade.png'; 
import C5 from '../assets/cards/fiveclub.png';
import H5 from '../assets/cards/fiveheart.png';
import D5 from '../assets/cards/fivediamond.png';
import S5 from '../assets/cards/fivespade.png'; 
import C4 from '../assets/cards/fourclub.png';
import H4 from '../assets/cards/fourheart.png';
import D4 from '../assets/cards/fourdiamond.png';
import S4 from '../assets/cards/fourspade.png'; 
import C3 from '../assets/cards/threeclub.png';
import H3 from '../assets/cards/threeheart.png';
import D3 from '../assets/cards/threediamond.png';
import S3 from '../assets/cards/threespade.png';
import C2 from '../assets/cards/twoclub.png';
import H2 from '../assets/cards/twoheart.png';
import D2 from '../assets/cards/twodiamond.png';
import S2 from '../assets/cards/twospade.png'; 
import empty from '../assets/cards/empty_card.png';
import cardBack from '../assets/cards/cardback.png';

export default class PreloadScene extends Phaser.Scene {
    constructor(){
        super('preload');
    }

    preload(){
        this.load.image('arcade', arcade);
        this.load.image('casino', cBG);
        this.load.image('blackjack', table);
        this.load.image('vwall', vwall);
        this.load.image('dude', dude);
        this.load.image('carL', carLeft);
        this.load.image('carR', carRight);
        this.load.image('testBG', sky);
        this.load.image('testground', ground);
        this.load.image('ramp', ramp);
        this.load.image('cardtable', bjTable);

        // card images
        this.load.image('AClub', AC);
        this.load.image('AHeart', AH);
        this.load.image('ASpade', AS);
        this.load.image('ADiamond', AD);
        this.load.image('KClub', KC);
        this.load.image('KHeart', KH);
        this.load.image('KSpade', KS);
        this.load.image('KDiamond', KD);
        this.load.image('QClub', QC);
        this.load.image('QHeart', QH);
        this.load.image('QSpade', QS);
        this.load.image('QDiamond', QD);
        this.load.image('JClub', JC);
        this.load.image('JHeart', JH);
        this.load.image('JSpade', JS);
        this.load.image('JDiamond', JD);
        this.load.image('TClub', TC);
        this.load.image('THeart', TH);
        this.load.image('TSpade', TS);
        this.load.image('TDiamond', TD);
        this.load.image('9Club', C9);
        this.load.image('9Heart', H9);
        this.load.image('9Spade', S9);
        this.load.image('9Diamond', D9);
        this.load.image('8Club', C8);
        this.load.image('8Heart', H8);
        this.load.image('8Spade', S8);
        this.load.image('8Diamond', D8);
        this.load.image('7Club', C7);
        this.load.image('7Heart', H7);
        this.load.image('7Spade', S7);
        this.load.image('7Diamond', D7);
        this.load.image('6Club', C6);
        this.load.image('6Heart', H6);
        this.load.image('6Spade', S6);
        this.load.image('6Diamond', D6);
        this.load.image('5Club', C5);
        this.load.image('5Heart', H5);
        this.load.image('5Spade', S5);
        this.load.image('5Diamond', D5);
        this.load.image('4Club', C4);
        this.load.image('4Heart', H4);
        this.load.image('4Spade', S4);
        this.load.image('4Diamond', D4);
        this.load.image('3Club', C3);
        this.load.image('3Heart', H3);
        this.load.image('3Spade', S3);
        this.load.image('3Diamond', D3);
        this.load.image('2Club', C2);
        this.load.image('2Heart', H2);
        this.load.image('2Spade', S2);
        this.load.image('2Diamond', D2);
        this.load.image('cardback', cardBack);
        this.load.image('nocard', empty);
    }

    create(){
        this.scene.start('game');
    }
};