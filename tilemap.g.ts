// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`100010000108080801010807020309080a010909010801090a0a0107020309090a0a0809010108090909080702030909090a08010101090a0a08010605040a0a09080101010a0a0a0a0101010101010a0a080801010a080801010101010108080808010101010a0a010808080801080808080801010a0a010808080801010109080108010a080809090101010101090a0a010108010101090a090801080808090a0801080101090a0a09080108080808080101080101090a0a0101010101010101080801010108090a08010101010a0a0a080809010a010809090101080a0a0a0801090a0a0a0a0808080808010a0a01010a0a0a0a0a0a0a080801010a0a0101090a0909`, img`
. . . . . . . . . . . . 2 . . . 
. . . . 2 2 . . . . . . 2 2 . . 
. . . . . . . . . . . . . 2 . . 
. . . 2 2 . . . . . 2 2 . . . . 
. 2 2 2 2 . . . . . . 2 2 . . . 
. 2 . . . . . . . . . . . . . . 
. . 2 2 . . . . . . . . . . . . 
. 2 2 . . . . . . . . . . . . . 
2 . . . . . . . . . . 2 2 . . . 
. . . . 2 . . . . . . . 2 . . . 
. . . 2 2 . . . . . . . . . . . 
. . . 2 2 . . . . . . . . . . . 
. . . . 2 . . . . . 2 2 2 . . . 
. 2 . . . . . . . 2 2 2 . . . 2 
2 2 2 . . . . . . 2 2 . . 2 2 2 
2 2 2 2 . . . . 2 2 . . . 2 . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tilePath5,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.castle.tilePath7,sprites.castle.tilePath4,sprites.castle.tileGrass1,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
