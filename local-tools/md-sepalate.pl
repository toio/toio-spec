#!/usr/bin/perl

use strict;
use File::Basename;

my $output_filename = "";

open(OUTFILE, ">", "header.txt") or die("Error: can not open file 'header.txt'");

while (<>) {
    if (/NEW FILE:\s+(\S+)\s+(\S+)\s+(\S+)/) {
        $output_filename = ($2.$3);
        $output_filename =~ s/\\/\//g;
        my $dirname = dirname($output_filename);
        if (! -d $dirname) {
            printf("create dir:a %s\n", $dirname);
            mkdir($dirname);
        }
        close(OUTFILE);
        if (-f $output_filename) {
            printf("WARN: file exists: %s\n", $output_filename);
            $output_filename .= "_";
        }
        printf("new file: %s\n", $output_filename);
        open(OUTFILE, ">", $output_filename) or die("Error: can not open file $output_filename");
    } else {
        print OUTFILE;
    }
}

