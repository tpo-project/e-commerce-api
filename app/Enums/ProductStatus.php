<?php

namespace App\Enums;

enum ProductStatus: int
{
    case Published = 1;
    case Delisted = 2;
    case Deleleted = 3;
}
